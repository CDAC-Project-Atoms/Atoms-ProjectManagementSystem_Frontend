import { IssueList } from './IssueList'


const IssuePage = () => {
  return (
    <div className='lg:flex flex-wrap gap-5 mt-10 lg:px-20'>
        <IssueList title={"Todo List"}/>

        <IssueList title={"In Progress"}/>

        <IssueList title={"Done"}/>
    </div>
  )
}

export default IssuePage