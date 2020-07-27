
using ErrorCenter.Emuns;

namespace ErrorCenter.DTOs
{
    public class LogSearchDTO
    {
        public Environment Environment { get; set; }
        public SearchBy SearchBy { get; set; }
        public string Search { get; set; }
        public OrderBy OrderBy { get; set; }
    }
}
