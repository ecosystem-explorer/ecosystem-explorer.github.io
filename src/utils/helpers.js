export const getTopicsFromSearch = (searchString) => {
    let topics = []
    const split = searchString.split('=')
    if (split.length === 2) {
      topics = split[1].split(',')
    }
    return topics
}
