import { MouseEvent } from 'react'
import { Modal as ModalBootstrap } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
// import * as S from './styles'

export type ModalProps = {
  showModal: boolean
  setShowModal?: (event: MouseEvent<HTMLDivElement>) => void
}
const Modal = ({ showModal, setShowModal }: ModalProps) => {
  return (
    <ModalBootstrap
      show={showModal}
      onHide={setShowModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalBootstrap.Header closeButton>
        <ModalBootstrap.Title id="contained-modal-title-vcenter">
          Bem vindo a pokedex
        </ModalBootstrap.Title>
      </ModalBootstrap.Header>
      <ModalBootstrap.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </ModalBootstrap.Body>
      <ModalBootstrap.Footer style={{ alignItems: 'center' }}>
        <Button variant="secondary" onClick={setShowModal}>
          Close
        </Button>
      </ModalBootstrap.Footer>
    </ModalBootstrap>
  )
}

export default Modal
