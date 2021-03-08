import { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";

function App() {
  useEffect(() => {
    const pusher = new Pusher("f59d9cb1a9957b03781e", {
      cluster: "ap3",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        {/* chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
