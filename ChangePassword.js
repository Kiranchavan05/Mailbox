
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useRef, Fragment } from "react";

const ChangePassword=()=>{
  const emailInputRef = useRef()
  

    const submitHandler = async(event) => {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value


        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAIyZ-UnXtXcWkfqp-eNXm7G0Tog1D6O-4',{
          method :'POST',
          body : JSON.stringify({
              requestType : "PASSWORD_RESET",
              email : enteredEmail
          })
      })
       if (response.ok) {
         const data = await response.json();
         console.log(data)
         alert('Link sent to Entered Email')
       } else {
         const data = await response.json();
         alert(data.error.message);
       }

       emailInputRef.current.value = ''
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
                       ref={emailInputRef}
                      
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