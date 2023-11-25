interface Props {
  type: 'primary' | 'secondary' | 'tertiary'
  text: string
}

export default function HeaderComponent({ type, text }: Props): JSX.Element {
  const header = (): JSX.Element => {
    switch (type) {
      case 'primary':
        return (
          <h1 className='text-6xl font-extrabold text-grayish-blue'>{text}</h1>
        )
      case 'secondary':
        return (
          <h2 className='text-3xl font-semibold text-grayish-blue'>{text}</h2>
        )
      case 'tertiary':
        return <h3 className=''>{text}</h3>
    }
  }
  return header()
}
