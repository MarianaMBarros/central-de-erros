using System;
using System.ComponentModel.DataAnnotations;

namespace ErrorCenter.DTOs
{
    public class CreateNewLogDTO
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public int Event { get; set; }

        [Required]
        public string Level { get; set; }        

        [Required]
        public string Host { get; set; }

        [Required]
        public int Environment { get; set; }

        [Required]
        public int Frequency { get; set; }

    }
}
