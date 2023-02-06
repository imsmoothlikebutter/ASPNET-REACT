using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ICT2106
{
    public class Exchange
    {
        public int RequestId { get; set; }
        public int OrderId { get; set; }

        public string? reason { get; set; }
        public string? status { get; set; }

        public string? imagePath { get; set; }
    }
}
