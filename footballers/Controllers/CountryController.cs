using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using footballers.Services;
using footballers.Models;

namespace footballers.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CountryController : ControllerBase
    {
        private readonly ICountryService service;

        public CountryController(ICountryService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<Country> GetCountries()
            => service.GetCountries();
    }
}