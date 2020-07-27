using System.Collections.Generic;
using System.Linq;
using ErrorCenter.Data;
using ErrorCenter.Emuns;
using ErrorCenter.Models;
using Microsoft.EntityFrameworkCore;

namespace ErrorCenter.Repositories
{

    public class LogRepository : ILogRepository
    {
        private readonly ErrorCenterContext _context;

        public LogRepository(ErrorCenterContext context)
        {
            _context = context;
        }

        public Log Save(Log log)
        {
            var state = log.Id == 0 ? EntityState.Added : EntityState.Modified;
            _context.Entry(log).State = state;
            _context.SaveChanges();
            return log;
        }

        public List<Log> GetLogs(Environment environment, SearchBy searchBy, string search, OrderBy orderBy)
        {
            var logs = _context.Logs.Where(c => c.Environment == (int)environment);

            switch (searchBy)
            {
                case SearchBy.Level:
                    logs = logs.Where(c => c.Level == search);
                    break;
                case SearchBy.Description:
                    logs = logs.Where(c => c.Description.Contains(search));
                    break;
                case SearchBy.Origin:
                    logs = logs.Where(c => c.Host == search);
                    break;
            }

            switch (orderBy)
            {
                case OrderBy.Level:
                    logs = logs.OrderBy(c => c.Level);
                    break;
                case OrderBy.Frequency:
                    logs = logs.OrderBy(c => c.Frequency);
                    break;
                default:
                    break;
            }
            var xx = logs.ToList();
            return xx;
        }

        public Log GetById(int id)
        {
            return _context.Logs.FirstOrDefault(c => c.Id == id);
        }

        public void Remove(int id)
        {
            var item = GetById(id);
            _context.Logs.Remove(item);
            _context.SaveChanges();
        }
    }
}
