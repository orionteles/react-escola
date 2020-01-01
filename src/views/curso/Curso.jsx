import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";

class Curso extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col >
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h5">Dados Gerais</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col md="2" className="text-right">
                                                <label>Nome: </label>
                                            </Col>
                                            <Col md="10">
                                                <Input type="text" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <div className="update ml-auto mr-auto">
                                                <Button color="success" type="submit">
                                                    Enviar
                                                </Button>
                                            </div>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Curso;
