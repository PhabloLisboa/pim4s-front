import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Redirect } from "react-router-dom";
import Table from "../../components/Table";
import Dialog from "../../components/Dialog";
import { Button, Typography } from "@material-ui/core";
import dashboardService from "./dashboardService";
import * as dialogActions from "../../store/actions/DialogActions";
import * as clientActions from "../../store/actions/clientActions";
import {
  VictoryChart,
  VictoryStack,
  VictoryBar,
  VictoryAxis,
  VictoryLine,
} from "victory";

export default function Dashboard(props) {
  const logged = useSelector((state) => state.Auth.logged);
  const dispatch = useDispatch();
  const store = useStore();
  const user = useSelector((state) => state.Auth.user);

  useEffect(() => {
    (async () => {
      const gettedClients = await dashboardService.getAllClients(store);
      dispatch(clientActions.setClients(gettedClients));
    })();
    // eslint-disable-next-line
  }, []);

  const myDataset = [
    [
      { x: "a", y: 1 },
      { x: "b", y: 2 },
      { x: "c", y: 3 },
      { x: "d", y: 2 },
      { x: "e", y: 1 },
    ],
    [
      { x: "a", y: 2 },
      { x: "b", y: 3 },
      { x: "c", y: 4 },
      { x: "d", y: 5 },
      { x: "e", y: 5 },
    ],
    [
      { x: "a", y: 1 },
      { x: "b", y: 2 },
      { x: "c", y: 3 },
      { x: "d", y: 4 },
      { x: "e", y: 4 },
    ],
  ];

  const data = [
    [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 4 },
    ],
    [
      { x: 1, y: 400 },
      { x: 2, y: 350 },
      { x: 3, y: 300 },
      { x: 4, y: 250 },
    ],
    [
      { x: 1, y: 75 },
      { x: 2, y: 85 },
      { x: 3, y: 95 },
      { x: 4, y: 100 },
    ],
  ];
  // find maxima for normalizing data
  const maxima = data.map((dataset) => Math.max(...dataset.map((d) => d.y)));

  const xOffsets = [50, 200, 350];
  const tickPadding = [0, 0, -15];
  const anchors = ["end", "end", "start"];
  const colors = ["black", "red", "blue"];

  return (
    <div className="pt-8 flex flex-col justify-around text-center">
      <Typography variant="h4">Projeções</Typography>
      <div className="flex">
        {!localStorage.getItem("token") && <Redirect to="/" />}
        <VictoryChart height={600} width={600} domainPadding={{ x: 30, y: 20 }}>
          <VictoryStack colorScale={["black", "blue", "tomato"]}>
            {myDataset.map((data, i) => {
              return <VictoryBar data={data} key={i} />;
            })}
          </VictoryStack>
          <VictoryAxis dependentAxis tickFormat={(tick) => `${tick}%`} />
          <VictoryAxis tickFormat={["a", "b", "c", "d", "e"]} />
        </VictoryChart>

        <VictoryChart width={600} height={600} domain={{ y: [0, 1] }}>
          <VictoryAxis />
          {data.map((d, i) => (
            <VictoryAxis
              dependentAxis
              key={i}
              offsetX={xOffsets[i]}
              style={{
                axis: { stroke: colors[i] },
                ticks: { padding: tickPadding[i] },
                tickLabels: { fill: colors[i], textAnchor: anchors[i] },
              }}
              // Use normalized tickValues (0 - 1)
              tickValues={[0.25, 0.5, 0.75, 1]}
              // Re-scale ticks by multiplying by correct maxima
              tickFormat={(t) => t * maxima[i]}
            />
          ))}
          {data.map((d, i) => (
            <VictoryLine
              key={i}
              data={d}
              style={{ data: { stroke: colors[i] } }}
              // normalize data
              y={(datum) => datum.y / maxima[i]}
            />
          ))}
        </VictoryChart>
      </div>
    </div>
  );
}
