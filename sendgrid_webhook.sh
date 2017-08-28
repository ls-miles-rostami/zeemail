function localtunnel {
  lt -s allindotime --port 8080
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
