using System.Collections.Generic;
using footballers.Models;
using footballers.Data;

namespace footballers.Services
{
    public class CountryService : ICountryService
    {
        private readonly ICountryRepository repository;

        public CountryService(ICountryRepository repository)
        {
            this.repository = repository;
        }

        public IEnumerable<Country> GetCountries()
            => repository.GetCountries();
    }
}