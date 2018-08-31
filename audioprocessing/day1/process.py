from pydub import AudioSegment
from pydub.utils import which

AudioSegment.converter = which("ffmpeg")


song = AudioSegment.from_mp3("280.mp3")
aac_version = AudioSegment.from_file("01.aac", "aac")

# pydub does things in milliseconds
ten_seconds = 10 * 1000

first_10_seconds = song[:ten_seconds]
# aac_first_10_seconds = aac_version[:ten_seconds]

# last_5_seconds = song[-5000:]

first_10_seconds.export("first10.mp3", format="mp3")
# aac_first_10_seconds.export("first10.aiff", format="aac")
# last_5_seconds.export("last10.mp3", format="mp3")
