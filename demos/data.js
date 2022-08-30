 let response = {
    "results": {
        "A": {
            "frames": [
                {
                    "schema": {
                        "name": "response",
                        "refId": "A",
                        "meta": {
                            "custom": {
                                "MaxSelf": 30000000,
                                "Names": [
                                    "total",
                                    "github.com/hashicorp/memberlist.(*Memberlist).packetListen",
                                    "github.com/hashicorp/memberlist.(*Memberlist).ingestPacket",
                                    "github.com/hashicorp/memberlist.(*Memberlist).handleCommand",
                                    "github.com/hashicorp/memberlist.(*Memberlist).handlePing",
                                    "github.com/hashicorp/memberlist.(*Memberlist).encodeAndSendMsg",
                                    "github.com/hashicorp/memberlist.(*Memberlist).sendMsg",
                                    "github.com/hashicorp/memberlist.(*Memberlist).rawSendMsgPacket",
                                    "github.com/armon/go-metrics.IncrCounter",
                                    "github.com/armon/go-metrics.(*Metrics).IncrCounter",
                                    "github.com/armon/go-metrics.(*Metrics).IncrCounterWithLabels",
                                    "github.com/armon/go-metrics/prometheus.(*PrometheusSink).IncrCounterWithLabels",
                                    "github.com/armon/go-metrics/prometheus.flattenKey",
                                    "strings.Join",
                                    "github.com/hashicorp/memberlist.(*Memberlist).triggerFunc",
                                    "github.com/hashicorp/memberlist.(*Memberlist).gossip",
                                    "github.com/armon/go-metrics.MeasureSince",
                                    "github.com/armon/go-metrics.(*Metrics).MeasureSince",
                                    "github.com/armon/go-metrics.(*Metrics).MeasureSinceWithLabels",
                                    "github.com/armon/go-metrics/prometheus.(*PrometheusSink).AddSampleWithLabels",
                                    "regexp.(*Regexp).ReplaceAllString",
                                    "regexp.(*Regexp).replaceAll",
                                    "runtime.growslice",
                                    "runtime.mcall",
                                    "runtime.park_m",
                                    "runtime.schedule",
                                    "runtime.findrunnable",
                                    "runtime.checkTimers",
                                    "runtime.stealWork",
                                    "runtime.(*randomEnum).next",
                                    "golang.org/x/sync/errgroup.(*Group).Go.func1",
                                    "github.com/grafana/fire/pkg/firedb.profileSelecters.SelectProfiles.func2.1",
                                    "github.com/grafana/fire/pkg/firedb.(*Head).SelectProfiles",
                                    "github.com/grafana/fire/pkg/firedb.(*profilesIndex).forMatchingProfiles",
                                    "github.com/hashicorp/memberlist.(*Memberlist).handleConn",
                                    "log.(*Logger).Printf",
                                    "log.(*Logger).Output",
                                    "github.com/grafana/dskit/kv/memberlist.loggerAdapter.Write",
                                    "github.com/go-kit/log.(*context).Log",
                                    "github.com/grafana/loki/pkg/util/log.(*prometheusLogger).Log",
                                    "github.com/prometheus/client_golang/prometheus.(*CounterVec).WithLabelValues",
                                    "github.com/prometheus/client_golang/prometheus.(*CounterVec).GetMetricWithLabelValues",
                                    "runtime.assertI2I",
                                    "github.com/hashicorp/memberlist.(*Memberlist).readRemoteState",
                                    "github.com/hashicorp/go-msgpack/codec.(*Decoder).Decode",
                                    "github.com/hashicorp/go-msgpack/codec.(*Decoder).decode",
                                    "github.com/hashicorp/go-msgpack/codec.(*Decoder).decodeValue",
                                    "github.com/hashicorp/go-msgpack/codec.(*decFnInfo).kStruct",
                                    "reflect.Value.Field",
                                    "reflect.(*rtype).Kind",
                                    "google.golang.org/grpc.(*Server).handleRawConn.func1",
                                    "google.golang.org/grpc.(*Server).serveStreams",
                                    "google.golang.org/grpc/internal/transport.(*http2Server).HandleStreams",
                                    "golang.org/x/net/http2.(*Framer).ReadFrame",
                                    "golang.org/x/net/http2.(*Framer).readMetaFrame",
                                    "golang.org/x/net/http2/hpack.(*Decoder).Write",
                                    "golang.org/x/net/http2/hpack.(*Decoder).parseHeaderFieldRepr",
                                    "golang.org/x/net/http2/hpack.(*Decoder).parseFieldIndexed",
                                    "golang.org/x/net/http2/hpack.(*Decoder).callEmit",
                                    "golang.org/x/net/http2.(*Framer).readMetaFrame.func1",
                                    "strings.HasPrefix",
                                    "golang.org/x/net/http2.readFrameHeader",
                                    "io.ReadFull",
                                    "io.ReadAtLeast",
                                    "bufio.(*Reader).Read",
                                    "net.(*conn).Read",
                                    "net.(*netFD).Read",
                                    "internal/poll.(*FD).Read",
                                    "internal/poll.(*pollDesc).prepareRead",
                                    "internal/poll.(*pollDesc).prepare",
                                    "internal/poll.runtime_pollReset",
                                    "runtime.netpollcheckerr",
                                    "net/http.(*conn).serve",
                                    "bufio.(*Reader).Peek",
                                    "bufio.(*Reader).fill",
                                    "net/http.(*connReader).Read",
                                    "net/http.(*connReader).lock",
                                    "net/http.(*conn).readRequest",
                                    "vendor/golang.org/x/net/http/httpguts.ValidHostHeader",
                                    "net/http.serverHandler.ServeHTTP",
                                    "net/http.HandlerFunc.ServeHTTP",
                                    "github.com/grafana/loki/pkg/loki.(*Loki).initServer.func2.1",
                                    "github.com/opentracing-contrib/go-stdlib/nethttp.MiddlewareFunc.func5",
                                    "github.com/weaveworks/common/middleware.Log.Wrap.func1",
                                    "github.com/weaveworks/common/middleware.Instrument.Wrap.func1",
                                    "github.com/felixge/httpsnoop.CaptureMetricsFn",
                                    "github.com/felixge/httpsnoop.(*Metrics).CaptureMetrics",
                                    "github.com/weaveworks/common/middleware.Instrument.Wrap.func1.2",
                                    "github.com/gorilla/mux.(*Router).ServeHTTP",
                                    "github.com/prometheus/client_golang/prometheus/promhttp.HandlerForTransactional.func1",
                                    "compress/gzip.(*Writer).Close",
                                    "compress/flate.(*Writer).Close",
                                    "compress/flate.(*compressor).close",
                                    "compress/flate.(*compressor).deflate",
                                    "compress/flate.(*compressor).writeBlock",
                                    "compress/flate.(*huffmanBitWriter).writeBlock",
                                    "compress/flate.(*huffmanBitWriter).indexTokens",
                                    "compress/flate.(*huffmanEncoder).generate",
                                    "compress/flate.(*huffmanEncoder).bitCounts",
                                    "runtime.memmove",
                                    "github.com/prometheus/common/expfmt.encoderCloser.Encode",
                                    "github.com/prometheus/common/expfmt.NewEncoder.func9",
                                    "github.com/prometheus/common/expfmt.MetricFamilyToOpenMetrics",
                                    "github.com/prometheus/common/expfmt.writeOpenMetricsSample",
                                    "github.com/prometheus/client_golang/prometheus.(*noTransactionGatherer).Gather",
                                    "github.com/prometheus/client_golang/prometheus.(*Registry).Gather",
                                    "github.com/prometheus/client_golang/prometheus.processMetric",
                                    "github.com/prometheus/client_golang/prometheus.(*histogram).Write",
                                    "github.com/prometheus/client_golang/prometheus/internal.NormalizeMetricFamilies",
                                    "runtime.makeslice",
                                    "runtime.mallocgc",
                                    "runtime.(*mcache).nextFree",
                                    "runtime.(*mcache).refill",
                                    "runtime.(*mcentral).cacheSpan",
                                    "net/http.(*ServeMux).ServeHTTP",
                                    "net/http/pprof.Index",
                                    "net/http/pprof.handler.ServeHTTP",
                                    "runtime/pprof.(*Profile).WriteTo",
                                    "runtime/pprof.writeGoroutine",
                                    "runtime/pprof.writeRuntimeProfile",
                                    "runtime/pprof.printCountProfile",
                                    "sort.Sort",
                                    "sort.quickSort",
                                    "sort.insertionSort",
                                    "runtime/pprof.(*keysByCount).Less",
                                    "runtime.mapaccess1_faststr",
                                    "runtime.tophash",
                                    "runtime/pprof.writeAlloc",
                                    "runtime/pprof.writeHeapInternal",
                                    "runtime/pprof.writeHeapProto",
                                    "runtime/pprof.(*profileBuilder).appendLocsForStack",
                                    "runtime/pprof.allFrames",
                                    "runtime.(*Frames).Next",
                                    "runtime.funcline1",
                                    "runtime.pcvalue",
                                    "runtime.step",
                                    "runtime/pprof.(*pcDeck).tryAdd",
                                    "runtime.typedslicecopy",
                                    "runtime/pprof.(*profileBuilder).build",
                                    "compress/gzip.(*Writer).Write",
                                    "compress/flate.(*Writer).Write",
                                    "compress/flate.(*compressor).write",
                                    "compress/flate.(*compressor).encSpeed",
                                    "compress/flate.(*huffmanBitWriter).writeBlockDynamic",
                                    "compress/flate.(*huffmanBitWriter).writeTokens",
                                    "github.com/grafana/fire/pkg/util.glob..func1.1",
                                    "golang.org/x/net/http2/h2c.h2cHandler.ServeHTTP",
                                    "github.com/grafana/fire/pkg/fire.(*Fire).initServer.func2.1",
                                    "github.com/uber/jaeger-client-go.(*Tracer).StartSpan",
                                    "github.com/uber/jaeger-client-go.(*Tracer).startSpanWithOptions",
                                    "github.com/uber/jaeger-client-go.(*Tracer).emitNewSpanMetrics",
                                    "github.com/uber/jaeger-lib/metrics/prometheus.(*counter).Inc",
                                    "github.com/weaveworks/common/instrument.ObserveWithExemplar",
                                    "github.com/weaveworks/common/tracing.ExtractSampledTraceID",
                                    "github.com/uber/jaeger-client-go.TraceID.String",
                                    "fmt.Sprintf",
                                    "fmt.(*pp).doPrintf",
                                    "fmt.(*pp).printArg",
                                    "runtime/pprof.runtime_goroutineProfileWithLabels",
                                    "runtime.goroutineProfileWithLabels",
                                    "runtime.forEachGRace",
                                    "runtime.goroutineProfileWithLabels.func2",
                                    "runtime.goroutineProfileWithLabels.func1",
                                    "runtime.MemProfile",
                                    "runtime.mProf_FlushLocked",
                                    "runtime.(*bucket).mp",
                                    "runtime/pprof.(*profileBuilder).pbSample",
                                    "runtime/pprof.writeHeapProto.func1",
                                    "runtime/pprof.(*profileBuilder).pbLabel",
                                    "runtime/pprof.(*profileBuilder).stringIndex",
                                    "runtime.mapaccess2_faststr",
                                    "aeshashbody",
                                    "runtime/pprof.(*profileBuilder).flush",
                                    "compress/flate.(*huffmanBitWriter).writeBits",
                                    "compress/flate.(*huffmanBitWriter).write",
                                    "github.com/felixge/httpsnoop.(*rw).Write",
                                    "github.com/felixge/httpsnoop.(*Metrics).CaptureMetrics.func2.1",
                                    "github.com/weaveworks/common/middleware.(*badResponseLoggingWriter).Write",
                                    "github.com/opentracing-contrib/go-stdlib/nethttp.(*statusCodeTracker).Write",
                                    "net/http.(*response).Write",
                                    "net/http.(*response).write",
                                    "bufio.(*Writer).Write",
                                    "bufio.(*Writer).Flush",
                                    "net/http.(*chunkWriter).Write",
                                    "net/http.checkConnErrorWriter.Write",
                                    "net.(*conn).Write",
                                    "net.(*netFD).Write",
                                    "internal/poll.(*FD).Write",
                                    "internal/poll.ignoringEINTRIO",
                                    "syscall.Write",
                                    "syscall.write",
                                    "syscall.Syscall",
                                    "runtime.entersyscall",
                                    "runtime.reentersyscall",
                                    "github.com/bufbuild/connect-go.(*Handler).ServeHTTP",
                                    "github.com/bufbuild/connect-go.(*connectHandler).NewStream",
                                    "github.com/felixge/httpsnoop.(*rw).Header",
                                    "runtime.newobject",
                                    "runtime.memclrNoHeapPointers",
                                    "github.com/bufbuild/connect-go.NewUnaryHandler[...].func1",
                                    "github.com/bufbuild/connect-go.(*errorTranslatingSender).Send",
                                    "github.com/bufbuild/connect-go.(*connectUnaryHandlerSender).Send",
                                    "github.com/bufbuild/connect-go.(*connectUnaryMarshaler).Marshal",
                                    "github.com/bufbuild/connect-go.(*protoBinaryCodec).Marshal",
                                    "google.golang.org/protobuf/proto.Marshal",
                                    "google.golang.org/protobuf/proto.MarshalOptions.marshal",
                                    "google.golang.org/protobuf/proto.checkInitialized",
                                    "github.com/bufbuild/connect-go.(*compressionPool).Compress",
                                    "github.com/bufbuild/connect-go.(*compressionPool).getCompressor",
                                    "compress/gzip.(*Writer).Reset",
                                    "compress/gzip.(*Writer).init",
                                    "compress/flate.(*Writer).Reset",
                                    "compress/flate.(*compressor).reset",
                                    "github.com/bufbuild/connect-go.NewUnaryHandler[...].func1.1",
                                    "github.com/grafana/fire/pkg/ingester.(*Ingester).Push",
                                    "github.com/go-kit/log/level.(*logger).Log",
                                    "github.com/go-kit/log.logfmtLogger.Log",
                                    "github.com/go-logfmt/logfmt.(*Encoder).EncodeKeyvals",
                                    "github.com/go-logfmt/logfmt.(*Encoder).EncodeKeyval",
                                    "github.com/go-logfmt/logfmt.writeValue",
                                    "github.com/go-logfmt/logfmt.safeMarshal",
                                    "github.com/go-kit/log.timeFormat.MarshalText",
                                    "time.Time.AppendFormat",
                                    "time.nextStdChunk",
                                    "github.com/go-kit/log.bindValues",
                                    "github.com/go-kit/log.Caller.func1",
                                    "runtime.Caller",
                                    "runtime.callers",
                                    "runtime.systemstack",
                                    "runtime.callers.func1",
                                    "runtime.gentraceback",
                                    "runtime.findfunc",
                                    "github.com/grafana/fire/pkg/gen/google/v1.(*Profile).UnmarshalVT",
                                    "github.com/grafana/fire/pkg/gen/google/v1.(*Sample).UnmarshalVT",
                                    "runtime.nextFreeFast",
                                    "github.com/grafana/fire/pkg/gen/google/v1.(*Location).UnmarshalVT",
                                    "runtime.(*mcentral).grow",
                                    "runtime.(*mheap).alloc",
                                    "runtime.(*mheap).alloc.func1",
                                    "runtime.(*mheap).allocSpan",
                                    "runtime.(*mheap).allocMSpanLocked",
                                    "runtime.(*fixalloc).alloc",
                                    "io.ReadAll",
                                    "github.com/klauspost/compress/gzip.(*Reader).Read",
                                    "github.com/klauspost/compress/flate.(*decompressor).Read",
                                    "github.com/klauspost/compress/flate.(*decompressor).nextBlock",
                                    "github.com/klauspost/compress/flate.(*decompressor).huffmanBytesReader",
                                    "github.com/klauspost/compress/flate.(*dictDecoder).writeByte",
                                    "github.com/klauspost/compress/flate.(*dictDecoder).writeCopy",
                                    "github.com/grafana/fire/pkg/firedb.(*Head).Ingest",
                                    "github.com/grafana/fire/pkg/firedb.(*deltaProfiles).computeDelta",
                                    "github.com/grafana/fire/pkg/firedb.deltaSamples",
                                    "github.com/grafana/fire/pkg/firedb.(*Head).convertSamples",
                                    "github.com/grafana/fire/pkg/firedb.(*deduplicatingSlice[...]).ingest",
                                    "github.com/grafana/fire/pkg/firedb.(*stacktracesHelper).rewrite",
                                    "github.com/grafana/fire/pkg/firedb.idConversionTable.rewriteUint64",
                                    "runtime.mapaccess2_fast64",
                                    "runtime.mapassign_fast64",
                                    "runtime.hashGrow",
                                    "runtime.makeBucketArray",
                                    "runtime.newarray",
                                    "runtime.memclrNoHeapPointersChunked",
                                    "runtime.growWork_fast64",
                                    "runtime.heapBitsSetType",
                                    "runtime.mapaccess2",
                                    "memeqbody",
                                    "runtime.profilealloc",
                                    "runtime.mProf_Malloc",
                                    "runtime.pcdatavalue",
                                    "github.com/grafana/fire/pkg/firedb.(*locationsHelper).rewrite",
                                    "google.golang.org/grpc/internal/transport.NewServerTransport.func2",
                                    "google.golang.org/grpc/internal/transport.(*loopyWriter).run",
                                    "google.golang.org/grpc/internal/transport.(*bufWriter).Flush",
                                    "runtime.gcBgMarkWorker",
                                    "runtime.gcBgMarkWorker.func2",
                                    "runtime.gcDrain",
                                    "runtime.scanobject",
                                    "runtime.findObject",
                                    "google.golang.org/grpc.(*Server).serveStreams.func1.2",
                                    "google.golang.org/grpc.(*Server).handleStream",
                                    "google.golang.org/grpc.(*Server).processStreamingRPC",
                                    "github.com/grpc-ecosystem/go-grpc-middleware.ChainStreamServer.func1",
                                    "github.com/grpc-ecosystem/go-grpc-middleware.ChainStreamServer.func1.1.1",
                                    "github.com/weaveworks/common/middleware.GRPCServerLog.StreamServerInterceptor",
                                    "github.com/opentracing-contrib/go-grpc.OpenTracingStreamServerInterceptor.func1",
                                    "github.com/weaveworks/common/middleware.StreamServerInstrumentInterceptor.func1",
                                    "github.com/grafana/loki/pkg/util/fakeauth.SetupAuthMiddleware.func2",
                                    "github.com/weaveworks/common/middleware.StreamServerUserHeaderInterceptor",
                                    "github.com/grpc-ecosystem/go-grpc-middleware/recovery.StreamServerInterceptor.func1",
                                    "github.com/grafana/enterprise-logs/pkg/enterprise/loki/labelaccess.StreamServerLBACInterceptor",
                                    "github.com/grafana/loki/pkg/logproto._Querier_QuerySample_Handler",
                                    "github.com/grafana/loki/pkg/ingester.(*Ingester).QuerySample",
                                    "github.com/grafana/loki/pkg/ingester.(*instance).QuerySample",
                                    "github.com/grafana/loki/pkg/logql.SelectSampleParams.Expr",
                                    "github.com/grafana/loki/pkg/logql/syntax.ParseSampleExpr",
                                    "github.com/grafana/loki/pkg/logql/syntax.ParseExpr",
                                    "github.com/grafana/loki/pkg/logql/syntax.parseExprWithoutValidation",
                                    "github.com/grafana/loki/pkg/logql/syntax.(*parser).Parse",
                                    "github.com/grafana/loki/pkg/logql/syntax.(*exprParserImpl).Parse",
                                    "runtime.newstack",
                                    "runtime.copystack",
                                    "google.golang.org/grpc.(*Server).processUnaryRPC",
                                    "github.com/grafana/loki/pkg/logproto._Pusher_Push_Handler",
                                    "github.com/grpc-ecosystem/go-grpc-middleware.ChainUnaryServer.func1",
                                    "github.com/grpc-ecosystem/go-grpc-middleware.ChainUnaryServer.func1.1.1",
                                    "github.com/weaveworks/common/middleware.GRPCServerLog.UnaryServerInterceptor",
                                    "github.com/opentracing-contrib/go-grpc.OpenTracingServerInterceptor.func1",
                                    "github.com/opentracing-contrib/go-grpc.extractSpanContext",
                                    "github.com/uber/jaeger-client-go.(*Tracer).Extract",
                                    "github.com/uber/jaeger-client-go.(*TextMapPropagator).Extract",
                                    "runtime.adjustframe",
                                    "runtime.getStackMap",
                                    "github.com/opentracing-contrib/go-grpc.metadataReaderWriter.ForeachKey",
                                    "github.com/uber/jaeger-client-go.(*TextMapPropagator).Extract.func1",
                                    "github.com/uber/jaeger-client-go.ContextFromString",
                                    "strings.Split",
                                    "strings.genSplit",
                                    "strings.Index",
                                    "strings.IndexByte",
                                    "indexbytebody",
                                    "github.com/grafana/dskit/kv/memberlist.(*TCPTransport).tcpListen",
                                    "net.(*TCPListener).Accept",
                                    "net.(*TCPListener).accept",
                                    "net.(*netFD).accept",
                                    "internal/poll.(*FD).Accept",
                                    "internal/poll.accept",
                                    "syscall.Accept4",
                                    "syscall.accept4",
                                    "syscall.Syscall6"
                                ],
                                "Total": 740000000
                            },
                            "preferredVisualisationType": "profile"
                        },
                        "fields": [
                            {
                                "name": "levels",
                                "type": "string",
                                "typeInfo": {
                                    "frame": "string"
                                }
                            }
                        ]
                    },
                    "data": {
                        "values": [
                            [
                                "[0,740000000,0,0]",
                                "[0,10000000,0,320,0,30000000,0,278,0,40000000,0,273,0,10000000,0,270,0,560000000,0,72,0,20000000,0,50,0,20000000,0,34,0,10000000,0,30,0,20000000,0,23,0,10000000,0,14,0,10000000,0,1]",
                                "[0,10000000,0,321,0,30000000,0,279,0,40000000,0,228,0,10000000,0,271,0,540000000,0,79,0,10000000,0,77,0,10000000,0,73,0,20000000,0,51,0,10000000,0,43,0,10000000,0,35,0,10000000,0,31,0,20000000,0,24,0,10000000,0,15,0,10000000,0,2]",
                                "[0,10000000,0,322,0,20000000,0,301,0,10000000,0,280,0,40000000,0,274,0,10000000,0,272,0,540000000,0,80,0,10000000,10000000,78,0,10000000,0,74,0,20000000,0,52,0,10000000,0,44,0,10000000,0,36,0,10000000,0,32,0,20000000,0,25,0,10000000,0,16,0,10000000,0,3]",
                                "[0,10000000,0,323,0,20000000,0,302,0,10000000,0,281,0,40000000,0,275,0,10000000,0,185,0,460000000,0,145,0,80000000,0,81,10000000,10000000,0,75,0,20000000,0,53,0,10000000,0,45,0,10000000,0,37,0,10000000,10000000,33,0,20000000,0,26,0,10000000,0,17,0,10000000,0,4]",
                                "[0,10000000,0,324,0,20000000,0,303,0,10000000,0,282,0,40000000,30000000,276,0,10000000,0,186,0,460000000,0,146,0,80000000,0,80,10000000,10000000,10000000,76,0,10000000,0,61,0,10000000,0,54,0,10000000,0,46,0,10000000,0,38,10000000,10000000,0,28,0,10000000,10000000,27,0,10000000,0,18,0,10000000,0,5]",
                                "[0,10000000,0,325,0,20000000,0,304,0,10000000,0,283,30000000,10000000,10000000,277,0,10000000,0,187,0,460000000,0,80,0,80000000,0,82,20000000,10000000,0,62,0,10000000,0,55,0,10000000,0,47,0,10000000,0,39,10000000,10000000,10000000,29,10000000,10000000,0,19,0,10000000,0,6]",
                                "[0,10000000,0,326,0,20000000,0,305,0,10000000,0,282,40000000,10000000,0,188,0,460000000,0,147,0,80000000,0,80,20000000,10000000,0,63,0,10000000,0,56,0,10000000,0,48,0,10000000,0,40,30000000,10000000,0,12,0,10000000,0,7]",
                                "[0,10000000,0,327,0,20000000,0,304,0,10000000,0,284,40000000,10000000,0,189,0,460000000,0,80,0,80000000,0,83,20000000,10000000,0,64,0,10000000,0,57,0,10000000,10000000,49,0,10000000,0,41,30000000,10000000,0,20,0,10000000,0,8]",
                                "[0,10000000,10000000,328,0,20000000,0,306,0,10000000,0,282,40000000,10000000,0,190,0,460000000,0,82,0,80000000,0,80,20000000,10000000,0,65,0,10000000,0,58,10000000,10000000,10000000,42,30000000,10000000,0,21,0,10000000,0,9]",
                                "[10000000,20000000,0,307,0,10000000,0,285,40000000,10000000,10000000,191,0,450000000,0,80,0,10000000,0,148,0,80000000,0,84,20000000,10000000,0,66,0,10000000,0,59,50000000,10000000,10000000,22,0,10000000,0,10]",
                                "[10000000,20000000,0,308,0,10000000,0,282,50000000,450000000,0,83,0,10000000,0,149,0,80000000,0,85,20000000,10000000,0,67,0,10000000,10000000,60,60000000,10000000,0,11]",
                                "[10000000,20000000,0,309,0,10000000,0,286,50000000,450000000,0,80,0,10000000,0,150,0,80000000,0,86,20000000,10000000,0,68,70000000,10000000,0,12]",
                                "[10000000,10000000,0,312,0,10000000,0,197,0,10000000,0,287,50000000,450000000,0,84,0,10000000,10000000,151,0,80000000,0,87,20000000,10000000,0,69,70000000,10000000,10000000,13]",
                                "[10000000,10000000,0,313,0,10000000,0,110,0,10000000,0,282,50000000,440000000,0,85,0,10000000,0,152,10000000,80000000,0,88,20000000,10000000,0,70]",
                                "[10000000,10000000,0,314,0,10000000,0,263,0,10000000,0,288,50000000,440000000,0,86,0,10000000,0,153,10000000,40000000,0,114,0,40000000,0,80,20000000,10000000,10000000,71]",
                                "[10000000,10000000,0,315,0,10000000,0,299,0,10000000,0,282,50000000,440000000,0,87,0,10000000,0,154,10000000,40000000,0,80,0,40000000,0,89]",
                                "[10000000,10000000,0,316,0,10000000,0,300,0,10000000,0,289,50000000,440000000,0,88,0,10000000,0,155,10000000,40000000,0,115,0,20000000,0,104,0,10000000,0,100,0,10000000,0,90]",
                                "[10000000,10000000,0,317,0,10000000,0,230,0,10000000,0,290,50000000,400000000,0,194,0,40000000,0,114,0,10000000,0,156,10000000,40000000,0,116,0,20000000,0,105,0,10000000,0,101,0,10000000,0,91]",
                                "[10000000,10000000,0,318,0,10000000,0,310,0,10000000,0,291,50000000,390000000,0,199,0,10000000,0,195,0,40000000,0,80,0,10000000,10000000,157,10000000,40000000,0,117,0,10000000,0,108,0,10000000,0,106,0,10000000,0,102,0,10000000,0,92]",
                                "[10000000,10000000,10000000,319,0,10000000,10000000,311,0,10000000,0,292,50000000,350000000,0,213,0,40000000,0,200,0,10000000,0,196,0,40000000,0,115,20000000,30000000,0,127,0,10000000,0,118,0,10000000,0,109,0,10000000,10000000,107,0,10000000,10000000,103,0,10000000,0,93]",
                                "[30000000,10000000,0,293,50000000,350000000,0,214,0,40000000,0,201,0,10000000,0,197,0,40000000,0,116,20000000,30000000,0,128,0,10000000,0,119,0,10000000,0,110,20000000,10000000,0,94]",
                                "[30000000,10000000,0,294,50000000,200000000,0,249,0,40000000,0,242,0,90000000,0,232,0,20000000,0,38,0,40000000,0,202,0,10000000,0,110,0,40000000,0,117,20000000,30000000,0,129,0,10000000,0,120,0,10000000,0,111,20000000,10000000,0,95]",
                                "[30000000,10000000,0,295,50000000,90000000,20000000,253,0,100000000,0,252,0,10000000,0,250,0,40000000,0,243,0,30000000,0,235,0,50000000,20000000,233,0,10000000,0,197,0,10000000,0,224,0,10000000,0,215,0,30000000,0,207,0,10000000,0,203,0,10000000,10000000,198,0,30000000,0,127,0,10000000,0,118,20000000,10000000,0,138,0,20000000,0,130,0,10000000,0,121,0,10000000,0,112,20000000,10000000,0,96]",
                                "[30000000,10000000,0,296,70000000,30000000,20000000,170,0,10000000,10000000,269,0,10000000,0,257,0,20000000,10000000,264,0,20000000,0,197,0,80000000,0,253,0,10000000,10000000,251,0,40000000,0,244,0,10000000,0,197,0,20000000,0,22,20000000,30000000,0,109,0,10000000,10000000,110,0,10000000,0,225,0,10000000,0,216,0,30000000,0,208,0,10000000,0,204,10000000,30000000,0,128,0,10000000,0,119,20000000,10000000,0,139,0,10000000,0,136,0,10000000,0,131,0,10000000,0,122,0,10000000,10000000,113,20000000,10000000,0,97]",
                                "[30000000,10000000,0,297,90000000,10000000,10000000,265,10000000,10000000,0,258,10000000,10000000,10000000,265,0,20000000,0,110,0,30000000,10000000,257,0,30000000,30000000,256,0,20000000,0,254,10000000,20000000,0,246,0,20000000,0,245,0,10000000,0,110,0,20000000,10000000,110,20000000,30000000,20000000,110,10000000,10000000,0,226,0,10000000,0,217,0,30000000,0,209,0,10000000,0,205,10000000,20000000,0,129,0,10000000,0,163,0,10000000,0,158,20000000,10000000,0,140,0,10000000,10000000,137,0,10000000,0,132,0,10000000,0,123,30000000,10000000,0,98]",
                                "[30000000,10000000,0,298,110000000,10000000,0,259,20000000,10000000,10000000,198,0,10000000,10000000,263,10000000,10000000,10000000,262,0,10000000,0,258,30000000,20000000,0,255,10000000,10000000,0,248,0,10000000,10000000,247,0,20000000,20000000,246,0,10000000,10000000,198,10000000,10000000,0,111,40000000,10000000,10000000,234,10000000,10000000,0,227,0,10000000,0,218,0,30000000,0,210,0,10000000,10000000,206,10000000,20000000,0,166,0,10000000,0,164,0,10000000,0,159,20000000,10000000,0,141,10000000,10000000,0,133,0,10000000,0,124,30000000,10000000,10000000,99]",
                                "[30000000,10000000,0,299,110000000,10000000,0,260,60000000,10000000,0,259,30000000,20000000,20000000,256,10000000,10000000,10000000,99,50000000,10000000,0,112,60000000,10000000,0,228,0,10000000,0,219,0,30000000,0,211,20000000,10000000,0,172,0,10000000,0,167,0,10000000,10000000,165,0,10000000,0,160,20000000,10000000,0,142,10000000,10000000,0,134,0,10000000,0,125]",
                                "[30000000,10000000,0,300,110000000,10000000,0,110,60000000,10000000,0,260,120000000,10000000,0,113,60000000,10000000,0,229,0,10000000,0,220,0,30000000,0,212,20000000,10000000,0,139,0,10000000,0,168,10000000,10000000,0,161,20000000,10000000,0,143,10000000,10000000,10000000,135,0,10000000,10000000,126]",
                                "[30000000,10000000,10000000,99,110000000,10000000,0,266,60000000,10000000,0,110,120000000,10000000,0,236,60000000,10000000,0,230,0,10000000,0,221,0,30000000,30000000,198,20000000,10000000,0,140,0,10000000,0,169,10000000,10000000,10000000,162,20000000,10000000,10000000,144]",
                                "[150000000,10000000,0,267,60000000,10000000,0,261,120000000,10000000,0,237,60000000,10000000,10000000,231,0,10000000,0,222,50000000,10000000,0,141,0,10000000,0,170]",
                                "[150000000,10000000,0,227,60000000,10000000,10000000,198,120000000,10000000,0,228,70000000,10000000,10000000,223,50000000,10000000,0,142,0,10000000,10000000,171]",
                                "[150000000,10000000,0,228,190000000,10000000,0,238,130000000,10000000,0,143]",
                                "[150000000,10000000,0,229,190000000,10000000,0,239,130000000,10000000,0,144]",
                                "[150000000,10000000,0,230,190000000,10000000,0,240,130000000,10000000,0,173]",
                                "[150000000,10000000,0,268,190000000,10000000,10000000,241,130000000,10000000,0,174]",
                                "[150000000,10000000,10000000,134,330000000,10000000,0,175]",
                                "[490000000,10000000,0,176]",
                                "[490000000,10000000,0,177]",
                                "[490000000,10000000,0,178]",
                                "[490000000,10000000,0,179]",
                                "[490000000,10000000,0,180]",
                                "[490000000,10000000,0,181]",
                                "[490000000,10000000,0,182]",
                                "[490000000,10000000,0,183]",
                                "[490000000,10000000,0,181]",
                                "[490000000,10000000,0,182]",
                                "[490000000,10000000,0,184]",
                                "[490000000,10000000,0,185]",
                                "[490000000,10000000,0,186]",
                                "[490000000,10000000,0,187]",
                                "[490000000,10000000,0,188]",
                                "[490000000,10000000,0,189]",
                                "[490000000,10000000,0,190]",
                                "[490000000,10000000,0,191]",
                                "[490000000,10000000,0,192]",
                                "[490000000,10000000,10000000,193]"
                            ]
                        ]
                    }
                }
            ]
        }
    }
}