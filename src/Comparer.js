import React, { Component } from 'react';
import Highlighter from './Highlighter';
import latinize from 'latinize';
import styles from './styles.css'


export default class Comparer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchText: 'ethanol poison radium',
      textToHighlight: `Placer ici la liste, le mot ou le texte à comparer avec la liste des ingrédients proscrits.`,
      activeIndex: -1,
      caseSensitive: false
    }
  }
  render () {
    const { ...props } = this.props
    const { activeIndex, caseSensitive, searchText, textToHighlight } = this.state
    const searchWords = searchText.split(/\s/).filter(word => word)

    return (
      <div {...props}>
        <div className={styles.Row}>
          <div className={styles.FirstColumn}>
            <h4 className={styles.Header}>
              Liste des termes à chercher
            </h4>
            <input
              className={styles.Input}
              name='searchTerms'
              value={searchText}
              onChange={event => this.setState({ searchText: event.target.value })}
            />
          </div>
          <div className={styles.SecondColumn}>
            
          </div>
          <div className={styles.SecondColumn}>

          </div>
        </div>

        <h4 className={styles.Header}>
          Coller ici la liste à comparer
        </h4>
        <textarea
          className={styles.Input}
          name='textToHighlight'
          value={textToHighlight}
          onChange={event => this.setState({ textToHighlight: event.target.value })}
        />

        <h4 className={styles.Header}>
          Résultat
        </h4>

        <Highlighter
          activeClassName={styles.Active}
          activeIndex={activeIndex}
          caseSensitive={caseSensitive}
          highlightClassName={styles.Highlight}
          highlightStyle={{ fontWeight: 'normal' }}
          sanitize={latinize}
          searchWords={searchWords}
          textToHighlight={textToHighlight}
        />


      </div>
    )
  }
}
