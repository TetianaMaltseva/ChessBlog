export default {
  loadReviews (context) {
    if (!context.state.initload) {
      context.state.initload = true
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((json) => context.state.reviews = context.state.reviews.concat(json))
    }
  },
  createReview (context, data) {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10'), {
      method: JSON.stringify
    }

  }
}
