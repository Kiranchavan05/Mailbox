
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";


const ChangePassword=()=>{

    const submitHandler = async(event) => {
        event.preventDefault()
    }

    
    return (
        <>
         <Container className="mt-1">
         <Row className="container justify-content-center m-5">
           {/* Add justify-content-center class to center the row */}
           <Col lg={5}>
             <Card className="conatiner shadow-lg m-5">
               <Card.Body>
                 <Form className="container" onSubmit={submitHandler}>
                   <Card.Header className="p-3" style={{ textAlign: "center" , backgroundColor:'blue'}}>
                     <h4>Entrer Registered Email</h4>
                   </Card.Header>
                   <Form.Group className="m-2">
                     <Form.Control
                       type="text"
                       placeholder="Email"
                      
                     />
                   </Form.Group>
                   <div>
                    <Button
                      className="mt-2"
                      style={{ marginLeft: "45%" }}
                      type="submit"
                    >
                      Send Link
                    </Button>
                  </div>

                  
                
                 </Form>
               </Card.Body>
             </Card>
           </Col>
         </Row>
       </Container>

        </>
    )

}

export default ChangePassword;