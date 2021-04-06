using System;
using System.Collections.Generic;
using System.Linq;
using footballers.Models;
using Microsoft.Extensions.Logging;

namespace footballers.Data
{
    public class TeamRepository : ITeamRepository
    {
        private readonly ILogger logger;
        private readonly FootballersContext context;

        public TeamRepository(ILogger<TeamRepository> logger, FootballersContext context)
        {
            this.logger = logger;
            this.context = context;
        }
        public IEnumerable<Team> GetTeams()
        {
            try
            {
                return context.Teams.ToList();
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return new List<Team>();
            }
        }
    }
}