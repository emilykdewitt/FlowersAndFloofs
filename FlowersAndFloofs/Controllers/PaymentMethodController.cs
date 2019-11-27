﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlowersAndFloofs.DataAccess;
using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlowersAndFloofs.Controllers
{
    [Route("api/paymentMethod")]
    [ApiController]
    public class PaymentMethodController : ControllerBase
    {
        // GET: api/PaymentMethod/5
        [HttpGet("{id}")]
        public IEnumerable<PaymentMethod> GetByCustomerId(int id)
        {
            var repo = new PaymentMethodRepository();
            var paymentMethodsById = repo.GetPaymentMethodByCustomerId(id);
            return paymentMethodsById;
        }

        // POST: api/PaymentMethod
        [HttpPost]
        public IEnumerable<PaymentMethod> AddPaymentMethod(AddPaymentMethodDTO paymentMethodToAdd)
        {
            var repo = new PaymentMethodRepository();
            repo.AddCustomerPaymentMethod(paymentMethodToAdd);
            return repo.GetPaymentMethodByCustomerId(paymentMethodToAdd.CustomerId);
        }

        // PUT: api/PaymentMethod/5
        [HttpPut("update/{paymentMethodId}")]
        public IActionResult UpdatePaymentMethodById(int paymentMethodId, UpdatePaymentMethodDTO paymentMethodToUpdate)
        {
            var repo = new PaymentMethodRepository();
            repo.UpdatePaymentMethod(paymentMethodId, paymentMethodToUpdate);

            return Ok();
        }

        // DELETE: api/PaymentMethod/5
        [HttpDelete("{paymentMethodId}")]
        public IActionResult DeletePaymentMethod(int paymentMethodId)
        {
            var repo = new PaymentMethodRepository();
            repo.DeletePaymentMethod(paymentMethodId);

            return Ok();

        }
    }
}
