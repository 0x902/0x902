from datetime import datetime

log_file = "log.txt"

def write_log(message):
    with open(log_file, "a") as file:
        time_stamp = f"{datetime.now().strftime("%d/%m/%Y %H:%M:%S")}"
        file.write(f"{time_stamp}\t\t|\t{message}\n")