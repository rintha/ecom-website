import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import Tour from "./Tour";

const tourArr = [
  {
    id: "t1",
    date: "JUL16",
    place: "DETROIT, MI",
    description: "DTE ENERGY MUSIC THEATRE",
  },

  {
    id: "t2",
    date: "JUL19",
    place: "TORONTO,ON",
    description: "BUDWEISER STAGE",
  },

  {
    id: "t3",
    date: "JUL22",
    place: "BRISTOW, VA",
    description: "JIGGY LUBE LIVE",
  },

  {
    id: "t4",
    date: "JUL29",
    place: "PHOENIX, AZ",
    description: "JIGGY LUBE LIVE",
  },
  {
    id: "t5",
    date: "AUG2",
    place: "LAS VEGAS, NV",
    description: "T-MOBILE ARENA",
  },
  {
    id: "t6",
    date: "AUG7",
    place: "CONCORD, CA",
    description: "CONCORD PAVILION",
  },
];

const Home = () => {
  return (
    <>
      <div className="text-bg-secondary text-center p-5 m-0">
        <Button
          style={{
            backgroundColor: "transparent",
            border: "1px solid #17a2b8",
            color: "white",
            borderRadius: "0",
            marginBottom: "10px",
          }}
          variant="outline-info"
          size="lg"
        >
          Get Our Latest Album
        </Button>
        <br />
        <Button
          style={{
            backgroundColor: "transparent",
            border: "#17a2b8",
            color: "#17a2b8",
            fontSize: "25px",
          }}
        >
          <i className="fa fa-play"></i>
        </Button>
      </div>

      <div>
        <h2 className="text-center fw-bold m-4">Tours</h2>
        <Container style={{ width: "60%", margin: "0 auto" }}>
          <Table responsive>
            <tbody>
              {tourArr.map((tour) => (
                <Tour key={tour.id} tour={tour} />
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};
export default Home;
