import Card from "react-bootstrap/Card";

function SkCards(props) {
  return (
    <Card
      style={{
        width: "14rem",
        marginTop: "1rem",
        height: "18vmax",
        marginRight: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Card.Img
        style={{ margin: "1vmax auto", height: "10vmax", width: "10vmax" }}
        variant="top"
        src={props.imgSrc}
      />
      <Card.Body
        style={{
          paddingTop: "0.1vmax",
          lineHeight: "0",
          paddingBottom: "1vmax",
          height: "5vmax",
          borderTop: "2px solid #eee",
        }}
      >
        <Card.Title style={{ fontWeight: "600", fontSize: "larger" }}>
          {props.cardTitle}
        </Card.Title>
        <div>
          <Card.Text style={{ fontWeight: "300", fontSize: "medium" }}>
            {props.cardDesc}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SkCards;
