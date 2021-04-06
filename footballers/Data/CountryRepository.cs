using System;
using System.Collections.Generic;
using System.Linq;
using footballers.Models;
using Microsoft.Extensions.Logging;

namespace footballers.Data
{
    public class CountryRepository : ICountryRepository
    {
        private readonly ILogger logger;
        private readonly FootballersContext context;

        public CountryRepository(ILogger<CountryRepository> logger, FootballersContext context)
        {
            this.logger = logger;
            this.context = context;
        }
        public IEnumerable<Country> GetCountries()
        {
            try
            {
                return context.Countries.ToList();
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return new List<Country>();
            }
        }
    }
}