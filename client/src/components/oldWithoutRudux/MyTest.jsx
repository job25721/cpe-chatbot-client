import React from "react";
import "../css/custom.scss";

export default class ChatMassage extends React.Component {
  render() {
    return (
      <React-DocumentFragment>
        <div className="mt-5 mb-2 bebas d-flex justify-content-center">
          <span className="h1" style={{ color: "#0f4c81" }}>
            <b>CPE Chat Bot</b>
          </span>
        </div>
        <div className="t-box" id="style-1">
          <div className="d-flex ">
            <blockquote className="t-bq-l">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed modi
              voluptate dolor incidunt error ad nam labore aliquid maxime,
              numquam fuga minima cupiditate. Consequuntur, dolorum placeat
              laboriosam animi debitis soluta. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Asperiores ratione eligendi eius
              autem assumenda doloremque fugiat officiis quas aspernatur laborum
              nostrum dolores sunt voluptatum voluptates laboriosam, temporibus,
              culpa possimus expedita.
            </blockquote>
          </div>
          <div className="d-flex ">
            <blockquote className="t-bq-r">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              laborum eveniet quis obcaecati, quod, corrupti eos voluptatibus
              eum ratione unde porro. Sapiente dolor harum ipsum autem eos
              veritatis praesentium in!
            </blockquote>
          </div>
          <div className="d-flex ">
            <blockquote className="t-bq-l">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod in
              consectetur iure asperiores voluptate corporis culpa, natus quae
              dolore debitis assumenda pariatur, vero deserunt? Enim, ex. Itaque
              a exercitationem animi!
            </blockquote>
          </div>
          <div className="d-flex ">
            <blockquote className="t-bq-r">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse
              consequatur nobis vitae, tenetur architecto molestias quisquam!
              Sed, voluptatem quisquam minima ratione a deserunt explicabo,
              maxime incidunt obcaecati illum fugit.
            </blockquote>
          </div>
          <div className="d-flex ">
            <blockquote className="t-bq-l">...</blockquote>
          </div>
        </div>
        <div className="t-msg"></div>
      </React-DocumentFragment>
    );
  }
}
