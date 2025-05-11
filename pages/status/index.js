import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <p>Dependências:</p>
      <DataBaseStatus />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  let updatedAtText = "Carregando...";
  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
  }
  return <div>Ultima atualização: {updatedAtText}</div>;
}

function DataBaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  let databaseVersion = "Carregando...";
  let databaseMaxConnections = "Carregando...";
  let databaseOpenConnections = "Carregando...";
  if (!isLoading && data) {
    databaseVersion = data.dependencies.database.version;
    databaseMaxConnections = data.dependencies.database.max_connections;
    databaseOpenConnections = data.dependencies.database.open_connections;
  }
  return (
    <ul>
      <li>Banco de dados:</li>
      <ul>
        <li>Versão: {databaseVersion}</li>
        <li>Máximo de conexões suportadas: {databaseMaxConnections}</li>
        <li>Conexões abertas: {databaseOpenConnections}</li>
      </ul>
    </ul>
  );
}
