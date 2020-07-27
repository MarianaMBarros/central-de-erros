using System.Collections.Generic;
using ErrorCenter.Emuns;
using ErrorCenter.Models;

namespace ErrorCenter.Repositories
{
    public interface ILogRepository
    {
        Log GetById(int id);
        List<Log> GetLogs(Environment environment, SearchBy searchBy, string search, OrderBy orderBy);
        Log Save(Log log);
        void Remove(int id);
    }
}
