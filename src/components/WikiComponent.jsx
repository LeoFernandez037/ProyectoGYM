import React, { useState, useEffect } from "react";

function WikiComponent({ steps }) {
  const { select, selectReact } = steps;
  const [statusProgramacion, setStatusProgramacion] = useState(false);
  const [detail, setDetail] = useState("");

  useEffect(() => {
    if (select.value === "n") {
      setStatusProgramacion(true);
    }
    if (select.value === "y") {
      setDetail(selectReact.value);
    }
  }, [select, selectReact]);

  return (
    <div>
      {statusProgramacion ? (
        <div>
          <a
            href="https://es.wikipedia.org/wiki/Programaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¿Qué es la programación?
          </a>
        </div>
      ) : (
        <div>
          <a
            href={"https://es.wikipedia.org/wiki/React#" + detail}
            target="_blank"
            rel="noopener noreferrer"
          >
            {detail} React
          </a>
        </div>
      )}
    </div>
  );
}

export default WikiComponent;
