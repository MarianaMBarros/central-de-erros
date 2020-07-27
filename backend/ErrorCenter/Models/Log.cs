using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace ErrorCenter.Models
{
    [Table("log")]
    public class Log
    {
        [Column("id")]
        [Key]
        public int Id { get; set; }

        [Column("title")]
        [StringLength(500)]
        [Required]
        public string Title { get; set; }

        [Column("description")]
        [StringLength(5000)]
        [Required]
        public string Description { get; set; }

        [Column("event")]        
        [Required]
        public int Event { get; set; }

        [Column("level")]
        [StringLength(20)]
        [Required]
        public string Level { get; set; }

        [Column("user_token")]
        [StringLength(5000)]
        [Required]
        public string UserToken { get; set; }

        [Column("host")]
        [StringLength(500)]
        [Required]
        public string Host { get; set; }

        [Column("environment")]
        [Required]
        public int Environment { get; set; }


        [Column("frequency")]
        [Required]
        public int Frequency { get; set; }

        [Column("created_at")]
        [Required]
        public DateTime CreatedAt { get; set; }
    }
}
