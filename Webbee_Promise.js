/* Refactor the following code to use modern javascript best practices
 such as async await, exceptions, arrow functions and block scoped variable definitions.
Hint: Promise.all is fine 

import axios from 'axios';

function findAllCustomerData(baseURL) {
  return new Promise(function (resolve, reject) {
    axios
      .post('customers', {}, { baseURL: baseURL })
      .then(function (result) {
        var dataPromises = result.data.customerIds.map(function (customerId) {
          return axios.get('customers/' + customerId, { baseURL: baseURL });
        });

        Promise.all(dataPromises)
          .then(function (res) {
            resolve(
              res.map(function (result) {
                return result.data;
              })
            );
          })
          .catch(function (err) {
            reject(err);
          });
      })
      .catch(function (err) {
        console.log('fails', err.toString());
        reject(err);
      });
  });
}

(function() {
  var baseURL = '<https://ktwjky3ybe.execute-api.us-east-1.amazonaws.com>';
  findAllCustomerData(baseURL)
    .then(function (customers) {
      customers.forEach(function (customer) {
        console.log(
          customer.id +
          ': ' +
          customer.first\_name +
          ' ' +
          customer.last\_name
          );
      });
    })
    .catch(function (err) {
      console.error(err);
    });
})();
 */

import axios from 'axios';

export const  findAllCustomerData = (baseURL) => async (dispatch) => {
  return await new Promise((resolve, reject) => {
     axios
      .post('customers', {}, { baseURL: baseURL })
      .then( result => {
        let dataPromises =  result.data.customerIds.map(async customerId => {
          return  await axios.get('customers/' + customerId, { baseURL: baseURL });
        });

        Promise.all(dataPromises)
          .then(res => {
            console.log('res', res)
              resolve(
               res.map(result =>  {
                  return result.data;
              })
            );
          })
          .catch((err) => {
            reject(err)
          });
      })
      .catch((err)=> {
        console.log('fails', err.toString());
        reject(err);
      });
  });
}
(findAllCustomerData('https://ktwjky3ybe.execute-api.us-east-1.amazonaws.com')
.then(customers => {
  console.log('customers', customers);
  customers.forEach(customer => {
    console.log('customersresp', customer);
    console.log(
      customer.id +
      ': ' +
      customer.first_name +
      ' ' +
      customer.last_name
      );
  });
})
.catch(function (err) {
  console.error(err);
}))