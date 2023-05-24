import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";


export default function App() {
 


 const { register, handleSubmit } = useForm();
 const onFormSubmit = data => console.log(data);
 const onErrors = errors => console.error(errors);




 return (
  <div style={{textAlign:'center'}}>
   <Container className="mt-5 pt-5">
    <h1 className="text-center mb-5">Form</h1>
<form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
 <label htmlFor="">NAME</label>
 <input type="text" name="NAME" {...register('NAME',{ required: "NAME is required" })} id="" /><br></br><br></br>
 <label htmlFor="">Address</label>
 <input type="TEXT" name="Address" {...register('Address',{ required: "Address is required" })} id="" /><br></br><br></br>
 <label htmlFor="">College</label>
 <input type="TEXT" name="College" {...register('College',{ required: "College is required" })} id="" /><br></br><br></br>
 <label htmlFor="">Course</label>
 <input type="TEXT" name="Course" {...register('Course',{ required: "Course is required" })} id="" /><br></br><br></br>
 <label htmlFor="">SKill</label>
 <input type="TEXT" name="SKill" {...register('SKill',{ required: "SKill is required" })} id="" /><br></br><br></br>

 <button type="submit">Submit</button>
</form>
   </Container>
  </div>
 );
}

