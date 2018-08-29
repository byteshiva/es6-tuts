from pydub import AudioSegment

song = AudioSegment.from_mp3("280.mp3")

# pydub does things in milliseconds
ten_seconds = 10 * 1000

first_10_seconds = song[:ten_seconds]

last_5_seconds = song[-5000:]

first_10_seconds.export("first10.wav", format="wav")
# last_5_seconds.export("last10.mp3", format="mp3")
