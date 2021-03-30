import {Button, Card, Col, Media} from "react-bootstrap";
import fisLogo from "../../assets/fis_logo.png";
import React from "react";

const LatestResults = (props) => {

    return (
            <div style={{
                marginTop: '20px',
                borderRadius: "10px",
                paddingLeft: "10px",
            }}>
                <h6 style={{marginBottom: "10px"}}>Latest results</h6>
                {props.competitions.slice(0, 6).map(competition => (
                        <div key={competition.id} style={{marginBottom: "20px", height: "20%"}}>
                            <Card>
                                <Card.Header>{competition.seriesMajor.name} ({competition.date1})</Card.Header>
                                <Card.Subtitle className="mb-2 text-muted" style={{marginTop: "5px", marginLeft: "10px"}}><img
                                    alt={competition.hillVersion.hill.venue.city.region.country.code}
                                    src={'./flags/' + competition.hillVersion.hill.venue.city.region.country.code + '.png'}
                                    style={{height: "15px", marginRight: "5px"}}/>
                                    {competition.hillVersion.hill.venue.city.name} (HS: {competition.hillVersion.hillSize} m)
                                </Card.Subtitle>
                            <Media style={{marginLeft: "5px", marginTop: "10px"}}>
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src={fisLogo}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                        <ul style={{listStyleType: "none"}}>
                                            {competition.results.slice(0, 3).map(result => (
                                                <li>{result.totalRank}. <img
                                                    alt={result.skiJumper.person.country.code}
                                                    src={'./flags/' + result.skiJumper.person.country.code + '.png'}
                                                    style={{
                                                        height: "15px",
                                                        marginRight: "5px"
                                                    }}/> {result.skiJumper.person.firstName} {result.skiJumper.person.lastName} <b>{result.totalPoints} p.</b>
                                                </li>
                                            ))}
                                            <Button variant={"link"} size={"sm"} >Read more</Button>
                                        </ul>
                                </Media.Body>
                            </Media>
                            </Card>
                        </div>
                    )
                )
                }
            </div>
    )
}

export default LatestResults

