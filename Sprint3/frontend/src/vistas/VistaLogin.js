import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Mensaje from '../components/Mensaje'
import Cargando from '../components/Cargando'
import FormContainer from '../components/ContenedorFormulario'
import { login } from '../actions/accionesUsuario'


const VistaLogin = ({ location, history }) => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Iniciar Sesion</h1>
      {error && <Mensaje variant='danger'>{error}</Mensaje>}
      {loading && <Cargando />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='Email'>
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type='email'
            placeholder='Ingresar Correo'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type='password'
            placeholder='Ingresar Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Iniciar Sesion
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          ¿No tienes cuenta? {' '}
        <Link to='/registro'>
            Registrar
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )

}

export default VistaLogin