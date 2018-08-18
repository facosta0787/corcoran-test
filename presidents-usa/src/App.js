import React, { Component } from 'react'
import Container from './Components/Container'
import Menu from './Components/Menu'
import Spinner from './Components/Spinner'
import Table from './Components/Table'
import Modal from './Components/Modal'
import api from './api'
import 'normalize.css'
import './App.scss'

class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true,
      isModalOpen: false,
      presidents: []
    }
  }

  componentDidMount() {
    this.handleSort();
  }

  handleSort = (sort) => {
    this.setState({
      isLoading: true,
    })
    api.fetchall(sort)
    .then(response => this.setState({
        isLoading: false,
        presidents: response.data
      })
    )
    .catch(() => alert('An error has occurred'))
  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false })
  }

  handleOpenModal = (president) => {
    const {
      name,
      birthday,
      birthplace,
      deathday,
      deathplace
    } = president

    this.setState({
      isModalOpen: true,
      modalContent: (
        <div className="modal__data">
          <h3>{name}</h3>
          <p><span>Birthday: </span>{birthday}</p>
          <p><span>Birthplace: </span>{birthplace}</p>
          <p><span>Deathday: </span>{deathday}</p>
          <p><span>Deathplace: </span>{deathplace}</p>
        </div>
      ),
    })
  }

  render() {
    const { isModalOpen, presidents, modalContent, isLoading } = this.state
    return (
      <Container>
        <Menu onClick={this.handleSort}/>
        {
          isLoading && <Spinner />
        }
        {
          !isLoading && <Table data={presidents} onRowClick={this.handleOpenModal}/>
        }
        {
          isModalOpen &&
          <Modal handleClickOutSide={this.handleCloseModal}>
            {modalContent}
          </Modal>
        }
      </Container>
    )
  }
}

export default App
