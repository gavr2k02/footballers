using System.Collections.Generic;
using footballers.Models;

namespace footballers.Services
{
    public interface ICountryService
    {
        public IEnumerable<Country> GetCountries();
    }
}