import React, {PropTypes} from 'react'
// import CardList from '../../components/CardList/CardList'

class Groups extends React.Component {
  static displayName = 'Groups'

  static propTypes = {
    'groups': PropTypes.object
  }

  render() {
    const {groups} = this.props
    console.log('GROUPS', groups)
    // const cardList1 = { content: groups.data, childrenlayout: {full: true}}

    return (
      <div className="Groups">
        <h2>Groups Response Data</h2>
        <pre>{JSON.stringify(groups, null, 4)}</pre>
      </div>
    )
  }
}

export default Groups

// <CardList 
// header={{}}
// content={groups.data} 
// childrenlayout={cardList1.childrenlayout}/>
