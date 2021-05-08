import { Button, ButtonGroup, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import styled from 'styled-components'
import '../styles/Home.scss'
import { Link } from "react-router-dom";

const Title = styled.h3`
  text-align: center;
  color: #1976d2;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 20px;
`;

export default function Home(){

  const formik = useFormik({
    initialValues: {
      amount: 1,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Escolha a quantidade de perguntas</Title>
        <TextField 
          id="amount"
          label="" 
          variant="outlined" 
          type="number"
          inputProps={{ max: 50, value: formik.values.amount}}
          onChange={formik.handleChange}
          className='inputField'
          classes={{root: 'inputField'}}
        />
        <ButtonGroup disableElevation variant="contained" fullWidth>
          <Button  className='btn' component={Link} to={{pathname:'/dashboard', state:{amount: formik.values.amount}}}>START</Button>
          <Button  className='btn' onClick={()=>formik.resetForm()}>CANCEL</Button>
        </ButtonGroup>
      </Form>
    </div>
  )
}