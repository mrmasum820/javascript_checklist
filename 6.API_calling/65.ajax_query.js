//add jquery library cdn
//ajax - asynchronous javascript and xml
console.clear();

const makeRequest = async (url, method, data) => {
    try {
        const result = await $.ajax({
            url: url,
            method: method,
            data: data,
        })
        return result;
    }
    catch (err) {
        console.log(err);
    }
}

// const getData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'GET')
//         .then((res) => console.log(res))
// }

const createData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
        .then((res) => console.log(res))
}

// getData();
createData();