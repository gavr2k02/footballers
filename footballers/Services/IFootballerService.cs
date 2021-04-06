using System.Collections.Generic;
using footballers.Models;

namespace footballers.Services
{
    public interface IFootballerService
    {
        public IEnumerable<Footballer> GetFootballers();
        public bool AddFootballer(Footballer footballer);
        public bool UpdateFootballer(Footballer footballer);

    }
}