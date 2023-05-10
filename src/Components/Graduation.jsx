import "../Components/style.css";
import Accordion from "react-bootstrap/Accordion";
function Graduation() {
  return (
    <>
      <div className="graduation-container">
        <div className="grad-inner">
          <div className="degree">Graduation</div>
          <div className="degree-back">
            Bachelor's <br />
            in
            <br /> Technology
          </div>
        </div>

        {/* <div className="marks">
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Manav Rachna International Institute of Research & Studies
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                accusantium beatae quam officiis, vitae eos voluptates, commodi
                impedit magnam quos ipsum, deserunt eveniet molestiae iure? Rem
                itaque magni quo quos.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div> */}
      </div>
    </>
  );
}

export default Graduation;
