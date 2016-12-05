const dispatch = async id => ({ id })

export const getId = async () => {
  const { id } = await dispatch(42)

  return id
}
