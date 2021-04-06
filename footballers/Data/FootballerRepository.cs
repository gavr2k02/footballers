using System;
using System.Collections.Generic;
using System.Linq;
using footballers.Models;
using Microsoft.Extensions.Logging;

namespace footballers.Data
{
    public class FootballerRepository : IFootballerRepository
    {
        private readonly ILogger logger;
        private readonly FootballersContext context;
        public FootballerRepository(ILogger<FootballersContext> logger, FootballersContext context)
        {
            this.logger = logger;
            this.context = context;
        }
        public bool AddFootballer(Footballer footballer)
        {
            try
            {
                context.Footballers.Add(footballer);
                context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return false;
            }
        }

        public IEnumerable<Footballer> GetFootballers()
        {
            try
            {
                return context.Footballers.ToList();
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return new List<Footballer>();
            }
        }

        public bool UpdateFootballer(Footballer footballer)
        {
            try
            {
                context.Footballers.Update(footballer);
                context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return false;
            }
        }
    }
}