export default function Dashboard(props: any) {
  return (
    <div>
      {console.log(props.location.state.amount)}
      <h1>Tivia Time</h1>
    </div>
  )
}