import React from "react";
import { createRoot } from "react-dom/client";
import { Button, Table, version } from "antd";
import "antd/dist/reset.css";
import "./index.css";

const App = () => {
  const scroll = React.useMemo(() => {
    return { x: 1000, y: 300 };
  }, []);

  const data = React.useMemo(() => {
    return new Array(500).fill(null).map((_, idx) => {
      return { rowId: `id--${idx}`, name: `Row ${idx + 1}` };
    });
  }, []);

  const columns = React.useMemo(() => {
    return [
      {
        title: "Sticky Left",
        key: "sl",
        fixed: "left",
        width: "10em",
        render: (_, record) => <span>{record.name}</span>
      },
      ...new Array(50).fill(null).map((_, idx) => ({
        title: `Col ${idx + 1}`,
        key: `col-${idx}`,
        width: "10em",
        render: () => <Button>click</Button>
      })),
      {
        title: "Sticky Right",
        key: "sr",
        fixed: "right",
        width: "10em",
        render: (_, record) => <span>{record.rowId}</span>
      }
    ];
  }, []);

  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <Table
        rowKey="rowId"
        dataSource={data}
        scroll={scroll}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
