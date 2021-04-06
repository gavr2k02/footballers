using System.Collections.Generic;
using footballers.Models;

namespace footballers.Data
{
    public interface ICountryRepository
    {
        public IEnumerable<Country> GetCountries();
    }
}