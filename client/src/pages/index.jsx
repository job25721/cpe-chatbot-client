import React from "react";
import "../css/home.css";
import api from "../api";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      apiMsg: "waiting.."
    };
    this.getAPI = this.getAPI.bind(this);
  }



  async getAPI(message) {
    const body = JSON.stringify({
      message: message,
      sessionId: "User1"
    });

    const callback = await api.post("api/dialogflowGateway", body);
    console.log(callback.data.fulfillmentText);

    this.setState({ apiMsg: callback.data.fulfillmentText });
  }

  render() {
    return (
      <React-fragment>
        {/* <Helmet>
        <title>ทรงพระเจริญ</title>
      </Helmet> */}
        <div className="index">
          <img src="/img/index.jpg" alt="Safty First" className="img-index" />
          <div className="center">
            <a href="/">
              <button className="btn btn-dark button-index">
                {" "}
                Enter chat{" "}
              </button>
            </a>
          </div>
          <div className="center ">
            <img className="logo mr-3 ml-3" src="/img/Gear.png" alt="" />
            &nbsp;&nbsp;&nbsp;
            <img className="logo mr-3 ml-3" src="/img/cpe.png" alt="" />
          </div>
          <p className="center index-text">
            - Department of Computer Engineering, Chiang Mai University -
          </p>
          <div className="text-center">
            <h1 className="display-4">{this.state.apiMsg}</h1>

            <form onSubmit={async (e) => {
              e.preventDefault();
              await this.getAPI(this.state.message);
            }}>

              <input
                type="text"
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
                required
              />

              <button className="btn btn-primary">
                Submit
              </button>
            </form>

          </div>
        </div>
      </React-fragment>
    );
  }
}