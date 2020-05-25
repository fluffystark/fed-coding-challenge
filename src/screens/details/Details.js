import React from 'react'
import data from '../../feed/data.json'

import Card from '../../components/Card'
import Picture from '../../components/Picture'
import ContentItem from '../../components/ContentItem'

import {ReactComponent as RefreshIcon} from '../../assets/icons/refresh.svg'

import './styles.scss'

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      isDesc: false,
    };

    this.toggleSortItems = this.toggleSortItems.bind(this)
  }

  componentWillMount() {
    const { id } = this.props.match.params
    const details = data.find((val) => val.id === parseInt(id))

    details.questions = details.questions.map((value, index) => {
      value.date = new Date(value.date)
      value.id = index
      return value
    })
    this.setState({details: details})
  }

  toggleSortItems = () => {
    const { isDesc, details } = this.state
    const { questions } = details

    if (this.state.isDesc) {
      questions.sort((a,b) => a.date - b.date)
    } else {
      questions.sort((a,b) => b.date - a.date)
    }

    this.setState({
      details: {
        ...details,
        questions: questions
      },
      isDesc: !isDesc
    })
  }

  render() {
    const { tag, image, slug, title, questions } = this.state.details

    const content = questions.map((value, _) => {
      const { date, text, id } = value

      return <ContentItem key={date} date={date} text={text} id={id}/>
    })

    return (
      <div className="row detail-page">
        <div className="col-12 col-lg-6 col-xl-auto image-col">
          <div className="position-relative">
            <Card tag={tag} />
            <Picture img={ image } slug={ slug } />
          </div>
        </div>
        <div className="col col-md-10 col-lg offset-lg-1 detail-col">
          <div className="row">
            <h1>{ title }</h1>
          </div>
          <div className="row pt-4">
            <div className="sort-container" onClick={this.toggleSortItems}>
              <small className="outline-text">Sort by Latest</small>
              <RefreshIcon className="refresh-icon" />
            </div>
          </div>
          { content }
        </div>
      </div>
    );
  }
}
