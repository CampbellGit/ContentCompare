import React, { Component } from 'react';
import Highlighter from './Highlighter';
import latinize from 'latinize';
import styles from './styles.css'


export default class Comparer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchText: 'EDTA Aluminum chlorohydrate Potassium alum Ammonium lauryl sulfate Benzyl salicylate Dimethicone Guar hydroxypropyltrimonium chloride Polyquaternium-7 Sodium laureth sulfate Sodium lauryl sulfate  Zinc pyrithione PPG-15 stearyl ether Steareth-2 Amodimethicone BHT DMDM Hydantoin Phenoxyethano Benzophenone-3 BHA Butylparaben Propylparaben Benzophenone-4 benzophenone-5 Benzophenone-3 Benzylidene camphor Ethylhexyl methoxycinnamate Homosalate Titanium dioxide nano non nano  Octocrylene cinnamal cinnamyl alcohol citral coumarin eugenol farnesol geraniol hydroxycitronellal hydroxyisohexyl 3-cyclohexene carboxaldehyde HICC isoeugenol limonene DL linalool Benzyl salicylate Polyquaternium-7 Polyquaternium quaterniums PEG eth Acrylates copolymer Methylisothiazolinone Polyethylene Cocamidopropyl betaine Sodium lauryl sulfate Titanium dioxide Triclosan Alpha-Isomethyl Ionone Amyl CinnamalA mylcinnamyl Alcohol Anise Alcohol Benzyl Alcohol Benzyl Benzoate Benzyl Cinnamate Butylphenyl Methylpropional Citronellol Evernia Furfuracea Evernia Prunastri Hexyl Cinnamal Methyl 2-Octynoate Hydroxycitronellal',
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
