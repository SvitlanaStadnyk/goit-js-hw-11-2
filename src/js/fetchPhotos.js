// import axios from 'axios';

// async function fetchPhotos(searchQueryResult) {
//   const {
//     baseUrl,
//     key,
//     image_type,
//     orientation,
//     safesearch,
//     order,
//     page,
//     per_page,
//   } = pixabayAPI;
//   pixabayAPI.page = `${pageN}`;
//   const response = await axios.get(
//     `${baseUrl}?key=${key}&q=${q}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}&order=${order}&page=${page}&per_page=${per_page}`
//   );
//   const results = response.data;
//   const { total, totalHits, hits } = results;
//   const totalPages = Math.ceil(totalHits / per_page);

//   if (total === 0) {
//     throw new Error();
//   }
//   if (page >= totalPages) {
//     btnLoadMore.classList.remove('is-visible');
//     Notify.failure(
//       "We're sorry, but you've reached the end of search results."
//     );
//     return results;
//   }
//   console.log('totalHits', totalHits);
//   console.log('per_page', per_page);
//   console.log('totalPages=', totalPages);
//   return results;
// }
