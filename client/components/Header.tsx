export function Header(props: string[]) {
  console.log(props)
  return (
    <h2 className="bg-white pl-1 text-lg p-2">
      These are the {props[0]} of SW
    </h2>
  )
}
